import React, { useState } from 'react'


export type SubIndicator = {
    id: string;
    indicatorNumber: string;
    outcomeIndicator: string;
    indicatorCategory: string;
    indicator: string;
    unitOfMeasurement: string;
    frequency: string;
    responsibleAgency: string;
  };
  
  export type Indicator = {
    id: string;
    indicatorNumber: string;
    outcomeIndicator: string;
    indicatorCategory: string;
    indicator: string;
    unitOfMeasurement: string;
    frequency: string;
    responsibleAgency: string;
    subIndicators: SubIndicator[];
  };
  
  const AddIndicator = () => {
    const [subIndicators, setSubIndicators] = useState<SubIndicator[]>([]);
    const [subIndicator, setSubIndicator] = useState<SubIndicator>({
      id: '',
      indicatorNumber: '',
      outcomeIndicator: '',
      indicatorCategory: '',
      indicator: '',
      unitOfMeasurement: '',
      frequency: '',
      responsibleAgency: '',
    });
  
    const addSubIndicator = () => {
      setSubIndicators([...subIndicators, { ...subIndicator, id: Date.now().toString() }]);
      setSubIndicator({
        id: '',
        indicatorNumber: '',
        outcomeIndicator: '',
        indicatorCategory: '',
        indicator: '',
        unitOfMeasurement: '',
        frequency: '',
        responsibleAgency: '',
      });
    };
  
    return (
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <p className="mt-4 text-gray-500">
            Welcome, add your indicator details and when done click the button below the form.
          </p>
        </div>
  
        <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div>
            <label htmlFor="indicatorNumber" className="sr-only">
              Indicator Number
            </label>
            <div className="relative">
              <input
                type="text"
                id="indicatorNumber"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter indicator number"
              />
            </div>
          </div>
  
          <div>
            <label htmlFor="outcomeIndicator" className="sr-only">
              Outcome Indicator
            </label>
            <div className="relative">
              <input
                type="text"
                id="outcomeIndicator"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter outcome indicator"
              />
            </div>
          </div>
  
          <div>
            <label htmlFor="indicatorCategory" className="sr-only">
              Indicator Category
            </label>
            <div className="relative">
              <input
                type="text"
                id="indicatorCategory"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter indicator category"
              />
            </div>
          </div>
  
          <div>
            <label htmlFor="indicator" className="sr-only">
              Indicator
            </label>
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
            <label htmlFor="unitOfMeasurement" className="sr-only">
              Unit of Measurement
            </label>
            <div className="relative">
              <input
                type="text"
                id="unitOfMeasurement"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter unit of measurement"
              />
            </div>
          </div>
  
          <div>
            <label htmlFor="frequency" className="sr-only">
              Frequency
            </label>
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
            <label htmlFor="responsibleAgency" className="sr-only">
              Responsible Agency
            </label>
            <div className="relative">
              <input
                type="text"
                id="responsibleAgency"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter responsible agency"
              />
            </div>
          </div>
  
          <div className="mt-8">
            <h3 className="text-lg font-medium">SubIndicators</h3>
            {subIndicators.map((sub, index) => (
              <div key={sub.id} className="mt-4 p-4 border rounded-lg">
                <p>SubIndicator {index + 1}</p>
                <p>Indicator Number: {sub.indicatorNumber}</p>
                <p>Outcome Indicator: {sub.outcomeIndicator}</p>
                <p>Indicator Category: {sub.indicatorCategory}</p>
                <p>Indicator: {sub.indicator}</p>
                <p>Unit of Measurement: {sub.unitOfMeasurement}</p>
                <p>Frequency: {sub.frequency}</p>
                <p>Responsible Agency: {sub.responsibleAgency}</p>
              </div>
            ))}
            <div className="mt-4">
              <label htmlFor="subIndicatorNumber" className="sr-only">
                SubIndicator Number
              </label>
              <input
                type="text"
                id="subIndicatorNumber"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter subindicator number"
                value={subIndicator.indicatorNumber}
                onChange={(e) =>
                  setSubIndicator({ ...subIndicator, indicatorNumber: e.target.value })
                }
              />
  
              <label htmlFor="subOutcomeIndicator" className="sr-only">
                SubOutcome Indicator
              </label>
              <input
                type="text"
                id="subOutcomeIndicator"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter suboutcome indicator"
                value={subIndicator.outcomeIndicator}
                onChange={(e) =>
                  setSubIndicator({ ...subIndicator, outcomeIndicator: e.target.value })
                }
              />
  
              <label htmlFor="subIndicatorCategory" className="sr-only">
                SubIndicator Category
              </label>
              <input
                type="text"
                id="subIndicatorCategory"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter subindicator category"
                value={subIndicator.indicatorCategory}
                onChange={(e) =>
                  setSubIndicator({ ...subIndicator, indicatorCategory: e.target.value })
                }
              />
  
              <label htmlFor="subIndicator" className="sr-only">
                SubIndicator
              </label>
              <input
                type="text"
                id="subIndicator"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter subindicator"
                value={subIndicator.indicator}
                onChange={(e) =>
                  setSubIndicator({ ...subIndicator, indicator: e.target.value })
                }
              />
  
              <label htmlFor="subUnitOfMeasurement" className="sr-only">
                SubUnit of Measurement
              </label>
              <input
                type="text"
                id="subUnitOfMeasurement"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter subunit of measurement"
                value={subIndicator.unitOfMeasurement}
                onChange={(e) =>
                  setSubIndicator({ ...subIndicator, unitOfMeasurement: e.target.value })
                }
              />
  
              <label htmlFor="subFrequency" className="sr-only">
                SubFrequency
              </label>
              <input
                type="text"
                id="subFrequency"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter subfrequency"
                value={subIndicator.frequency}
                onChange={(e) =>
                  setSubIndicator({ ...subIndicator, frequency: e.target.value })
                }
              />
  
              <label htmlFor="subResponsibleAgency" className="sr-only">
                SubResponsible Agency
              </label>
              <input
                type="text"
                id="subResponsibleAgency"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter subresponsible agency"
                value={subIndicator.responsibleAgency}
                onChange={(e) =>
                  setSubIndicator({ ...subIndicator, responsibleAgency: e.target.value })
                }
              />
  
              <button
                type="button"
                className="inline-block w-full rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white mt-4"
                onClick={addSubIndicator}
              >
                Add SubIndicator
              </button>
            </div>
          </div>
  
          <div className="flex items-center justify-between w-full mt-8">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-green-600 px-5 py-3 text-sm font-medium text-white"
            >
              Add Indicator
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default AddIndicator;