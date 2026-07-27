import React from 'react';
import {Select} from "antd";

const ContactForm = () => {

    const fieldClass =
        "w-full bg-neutral-100 rounded-md px-4 py-3.5 text-neutral-700 placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-teal-600/40 transition-shadow";

    const items = [
        {key: '1', value: 'Branding'},
        {key: '2', value: 'Web Design'},
        {key: '3', value: 'Product Design'},
        {key: '4', value: 'Development'},
    ]

    const budgets = [
        {key: '1', value: '$1,000 - $5,000'},
        {key: '2', value: '$5,000 - $10,000'},
        {key: '3', value: '$10,000 - $25,000'},
        {key: '4', value: '$25,000+'},
    ]

    return (
        <form className="w-full max-w-xl flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <label className="text-sm text-neutral-800">Name</label>
                <input type="text" className={fieldClass} />
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-sm text-neutral-800">Email</label>
                <input type="email" className={fieldClass} />
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-sm text-neutral-800">
                    What service are you interested in
                </label>
                <div className="relative">
                   <Select options={items}  className={'w-136 h-10'} defaultValue={'Select service'} />
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-sm text-neutral-800">Budget</label>
                <div className="relative">
                   <Select options={budgets} className={'w-136 h-10'} defaultValue={'Select budget'} />
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-sm text-neutral-800">Message</label>
                <textarea rows={6} className={`${fieldClass} resize-none`} />
            </div>

            <button
                type="submit"
                className="w-full bg-teal-700 hover:bg-teal-800 transition-colors text-white font-medium rounded-md py-4 mt-2"
            >
                Submit
            </button>
        </form>
    );
};

export default ContactForm;