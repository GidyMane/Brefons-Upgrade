import React from 'react'

const EditIndicator = () => {
    return (
        <div>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg text-center">
                    <p className="mt-4 text-gray-500">
                        Welcome, add your component details and when done click the button below the form.
                    </p>
                </div>

                <div className="mx-auto mb-0 mt-8 max-w-md">
                    <form action="#" className="space-y-4 h-96 overflow-y-auto p-4 bg-white rounded-lg shadow-md">
                        <div>
                            <label htmlFor="indicator-number" className="sr-only">Indicator Number</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="indicator-number"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter indicator number"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="outcome-indicator" className="sr-only">Outcome Indicator</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="outcome-indicator"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter outcome indicator"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="indicator-category" className="sr-only">Indicator Category</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="indicator-category"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter indicator category"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="indicator" className="sr-only">Indicator</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="indicator"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter indicator"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="unit-of-measurement" className="sr-only">Unit of Measurement</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="unit-of-measurement"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter unit of measurement"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="frequency" className="sr-only">Frequency</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="frequency"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter frequency"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="responsible-agency" className="sr-only">Responsible Agency</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="responsible-agency"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter responsible agency"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between w-full">
                            <button
                                type="submit"
                                className="inline-block w-full rounded-lg bg-green-600 px-5 py-3 text-sm font-medium text-white"
                            >
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditIndicator
