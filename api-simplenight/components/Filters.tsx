import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { ChevronDownIcon, FilterIcon, MinusSmIcon, PlusSmIcon, ViewGridIcon } from '@heroicons/react/solid'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import ProductCard from './ProductCard';

const filtersSelect = [
    {
        id: 'adults',
        name: 'Adults',
        options: [
            { value: '0', label: '0', checked:false  },
            { value: '1', label: '1', checked:true },
            { value: '2', label: '2', checked:false },
            { value: '3', label: '3', checked:false },
            { value: '4', label: '4', checked:false },
            { value: '5', label: '5', checked:false },
            { value: '6', label: '6', checked:false },
            { value: '7', label: '7', checked:false },
            { value: '8', label: '8', checked:false },
        ],
    },
    {
        id: 'children',
        name: 'Children',
        options: [
            { value: '0', label: '0', checked: true },
            { value: '1', label: '1', checked: false },
            { value: '2', label: '2', checked: false },
            { value: '3', label: '3', checked: false },
            { value: '4', label: '4', checked: false },
            { value: '5', label: '5', checked: false },
            { value: '6', label: '6', checked: false },
            { value: '7', label: '7', checked: false },
            { value: '8', label: '8', checked: false },
        ],
    },
    {
        id: 'currency',
        name: 'Currency',
        options: [
            { value: 'USD', label: 'USD', checked: true },
            { value: 'CAD', label: 'CAD', checked: false },
            { value: 'CHF', label: 'CHF', checked: false },
            { value: 'EUR', label: 'EUR', checked: false },
            { value: 'GBP', label: 'GBP', checked: false },
            { value: 'JPY', label: 'JPY', checked: false },
            { value: 'MXN', label: 'MXN', checked: false },
            { value: 'UYU', label: 'UYU', checked: false },
        ],
    },
    {
        id: 'starRating',
        name: 'StarRating',
        options: [
            { value: '0', label: '0', checked: false },
            { value: '1', label: '1', checked: false },
            { value: '2', label: '2', checked: false },
            { value: '3', label: '3', checked: false },
            { value: '4', label: '4', checked: false },
            { value: '5', label: '5', checked: false },
        ],
    },
]

const filtersNumbers = [
    {
        id: 'minPrice',
        name: 'MinPrice',
        minimum: 0,
        maximum: Number.MAX_SAFE_INTEGER,
    },
    {
        id: 'maxPrice',
        name: 'MaxPrice',
        minimum: 0,
        maximum: Number.MAX_SAFE_INTEGER,
    },
    {
        id: 'limit',
        name: 'Limit',
        minimum: 0,
        maximum: Number.MAX_SAFE_INTEGER,
    },
    {
        id: 'radius',
        name: 'Radius',
        minimum: 0,
        maximum: 50,
    },
    {
        id: 'numberOfRooms',
        name: 'NumberOfRooms',
        minimum: 1,
        maximum: 10,
    },
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    const [hotels, setHotels] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <div className="bg-white">
            <div>
                {/* Mobile filter dialog */}
                <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <div className="fixed inset-0 flex z-40">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                                    <div className="px-4 flex items-center justify-between">
                                        <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                        <button
                                            type="button"
                                            className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                                            onClick={() => setMobileFiltersOpen(false)}
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <XIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>

                                    {/* Filters */}
                                    <form className="mt-4 border-t border-gray-200">
                                        {filtersSelect.map((section) => (
                                            <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                                                {({ open }) => (
                                                    <>
                                                        <h3 className="-mx-2 -my-3 flow-root">
                                                            <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                                                                <span className="font-medium text-gray-900">{section.name}</span>
                                                                <span className="ml-6 flex items-center">
                                                                    {open ? (
                                                                        <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                                                                    ) : (
                                                                        <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                                                                    )}
                                                                </span>
                                                            </Disclosure.Button>
                                                        </h3>
                                                        <Disclosure.Panel className="pt-6">
                                                            <div className="space-y-6">
                                                                {section.options.map((option, optionIdx) => (
                                                                    <div key={option.value} className="flex items-center">
                                                                        <input
                                                                            id={`filter-mobile-${section.id}-${optionIdx}`}
                                                                            name={`${section.id}[]`}
                                                                            value={option.value}
                                                                            checked={option.checked}
                                                                            type="radio"
                                                                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                                                        />
                                                                        <label
                                                                            htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                                            className="ml-3 min-w-0 flex-1 text-gray-500"
                                                                        >
                                                                            {option.label}
                                                                        </label>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </Disclosure.Panel>
                                                    </>
                                                )}
                                            </Disclosure>
                                        ))}
                                        {filtersNumbers.map((section) => (
                                            <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                                                {({ open }) => (
                                                    <>
                                                        <h3 className="-mx-2 -my-3 flow-root">
                                                            <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                                                                <span className="font-medium text-gray-900">{section.name}</span>
                                                                <span className="ml-6 flex items-center">
                                                                    {open ? (
                                                                        <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                                                                    ) : (
                                                                        <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                                                                    )}
                                                                </span>
                                                            </Disclosure.Button>
                                                        </h3>
                                                        <Disclosure.Panel className="pt-6">
                                                            
                                                            <div className="space-y-6">
                                                                <input type="number" id='{section.id}' name="quantity" min={section.minimum} max={section.maximum} placeholder='0'/>
                                                            </div>
                                                        </Disclosure.Panel>
                                                    </>
                                                )}
                                            </Disclosure>
                                        ))}
                                        {/* start date */}
                                        <Disclosure as="div" key="startDate" className="border-b border-gray-200 py-6">
                                            <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)}/>
                                        </Disclosure>
                                        {/* end date */}
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Hotels</h1>

                        <div className="flex items-center">
                            <Menu as="div" className="relative inline-block text-left">

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                </Transition>
                            </Menu>

                            <button type="button" className="p-2 -m-2 ml-5 sm:ml-7 text-gray-400 hover:text-gray-500">
                                <span className="sr-only">View grid</span>
                                <ViewGridIcon className="w-5 h-5" aria-hidden="true" />
                            </button>
                            <button
                                type="button"
                                className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                                onClick={() => setMobileFiltersOpen(true)}
                            >
                                <span className="sr-only">Filters</span>
                                <FilterIcon className="w-5 h-5" aria-hidden="true" />
                            </button>
                        </div>
                    </div>

                    <section aria-labelledby="products-heading" className="pt-6 pb-24">
                        <h2 id="products-heading" className="sr-only">
                            Products
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
                            {/* Filters */}
                            <form className="hidden lg:block">
                                <h3 className="sr-only">Categories</h3>

                                {filtersSelect.map((section) => (
                                    <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                                        {({ open }) => (
                                            <>
                                                <h3 className="-my-3 flow-root">
                                                    <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                                                        <span className="font-medium text-gray-900">{section.name}</span>
                                                        <span className="ml-6 flex items-center">
                                                            {open ? (
                                                                <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                                                            ) : (
                                                                <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                                                            )}
                                                        </span>
                                                    </Disclosure.Button>
                                                </h3>
                                                <Disclosure.Panel className="pt-6">
                                                    <div className="space-y-4">
                                                        {section.options.map((option, optionIdx) => (
                                                            <div key={option.value} className="flex items-center">
                                                                <input
                                                                    id={`filter-${section.id}-${optionIdx}`}
                                                                    name={`${section.id}[]`}
                                                                    checked={option.checked}
                                                                    type="radio"
                                                                    className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                                                />
                                                                <label
                                                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                                                    className="ml-3 text-sm text-gray-600"
                                                                >
                                                                    {option.label}
                                                                </label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                ))}

                                {filtersNumbers.map((section) => (
                                    <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                                        {({ open }) => (
                                            <>
                                                <h3 className="-my-3 flow-root">
                                                    <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                                                        <span className="font-medium text-gray-900">{section.name}</span>
                                                        <span className="ml-6 flex items-center">
                                                            {open ? (
                                                                <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                                                            ) : (
                                                                <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                                                            )}
                                                        </span>
                                                    </Disclosure.Button>
                                                </h3>
                                                <Disclosure.Panel className="pt-6">
                                                    <div className="space-y-6">
                                                        <input type="number" id='{section.id}' name="quantity" min={section.minimum} max={section.maximum} placeholder="0"/>
                                                    </div>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                ))}
                                <Disclosure as="div" key="startDate" className="border-b border-gray-200 py-6">
                                    <span className="font-medium text-gray-900"> Start Date</span>
                                    <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)}/> 
                                </Disclosure>
                                <Disclosure as="div" key="endDate" className="border-b border-gray-200 py-6">
                                    <span className="font-medium text-gray-900"> End Date</span>
                                    <DatePicker selected={endDate} onChange={(date:Date) => setEndDate(date)}/> 
                                </Disclosure>
                            </form>

                            {/* Product grid */}
                            <div className="lg:col-span-3">
                                {/* @TODO: meter aca las products cart para cada uno de los  hoteles */}
                                {/* Recorrer mapa del estado hoteles, para hallar este enviar consulta a la api 
                                con los datos de los filtros
                                 */}
                                {hotels.map(
                                    (hotel) => (
                                        // FALTA PASARLE LOS DATOS DEL HOTEL
                                        <ProductCard/>
                                ))}
                                
                                {/* Replace with your content */}
                                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 lg:h-full" />
                                {/* /End replace */}
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
} 