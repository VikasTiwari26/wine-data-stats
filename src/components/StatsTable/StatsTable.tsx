import React from "react";
import { TableProps } from "../../types/TableProps";
import { segregateData } from "../../utils/segregateData";
import './StatsTable.css';
import { calculateMean, calculateMedian, calculateMode } from "../../utils/handleStatsCalculatios";

const StatsTable = ({ wineData, propertyName }: TableProps) => {

    const { alcohol1, alcohol2, alcohol3 } = segregateData(wineData)

    return (
        <div className="table-container" >
            <h3> {propertyName} Stats Table </h3>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Measure</th>
                        <th>Alcohol 1</th>
                        <th>Alcohol 2</th>
                        <th>Alcohol 3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <p><span>{propertyName} </span><span>Mean</span></p>
                        </td>
                        <td>
                            <p>{calculateMean(alcohol1, propertyName)}</p>
                        </td>
                        <td>
                            <p>{calculateMean(alcohol2, propertyName)}</p>
                        </td>
                        <td>
                            <p>{calculateMean(alcohol3, propertyName)}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p><span>{propertyName} </span><span>Median</span></p>
                        </td>
                        <td>
                            <p>{calculateMedian(alcohol1, propertyName)}</p>
                        </td>
                        <td>
                            <p>{calculateMedian(alcohol2, propertyName)}</p>
                        </td>
                        <td>
                            <p>{calculateMedian(alcohol3, propertyName)}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p><span>{propertyName} </span><span>Mode</span></p>
                        </td>
                        <td>
                            <p>{calculateMode(alcohol1, propertyName)}</p>
                        </td>
                        <td>
                            <p>{calculateMode(alcohol2, propertyName)}</p>
                        </td>
                        <td>
                            <p>{calculateMode(alcohol3, propertyName)}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}

export default StatsTable