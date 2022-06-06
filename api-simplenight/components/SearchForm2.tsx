import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function SearchForm() {
    const [startDate, setStartDate] = useState(new Date());
    const [currencies, setCurrencies] = useState(['USD', 'CAD', 'CHF', 'EUR', 'GBP', 'JPY', 'MXN', 'UYU']);

    return (
        <form className="space-y-8 divide-y divide-gray-200 p-4">
            <div className="space-y-8 divide-y divide-gray-200">
                <div>
                    <div>
                        <label htmlFor="adults" className="block mt-2 text-sm font-medium text-gray-700">
                            Adults
                        </label>
                        <input type="number" name="adults" id="adults" placeholder="0"></input>
                        <label htmlFor="children" className="block mt-2 text-sm font-medium text-gray-700">
                            Children
                        </label>
                        <input type="number" name="children" id="children" placeholder="0"></input>
                        {/* @TODO:Children ages  */}
                        <label htmlFor="currency" className="block mt-2 text-sm font-medium text-gray-700">
                                Currency
                        </label>
                        <div className="mt-2">
                            <select
                                id="currency"
                                name="currency"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            >
                                { currencies.map(currency => ( 
                                    <option key={currency} value={currency}>{currency}</option>
                                ))}
                            </select>
                        </div>
                        {/* What means curstomer_transaction_id? */}
                        <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)}/> 
                    </div>
                </div>
            </div>
                    
        </form>
    )
}