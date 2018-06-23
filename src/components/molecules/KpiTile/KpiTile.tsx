import * as React from 'react'
import * as s from './KpiTile.css'
import { AppState, MeasureName, MeasureData } from '../../../sharedTypes'
import classNames = require('classnames')

interface Props {
    measure: MeasureName
    
    // Instance-specific data extracted from appState upsteam
    kpisData: MeasureData,
    selected?: boolean

    // Instance-specific function extracted from appState upsteam
    handleKpiTileClick?: (measure: MeasureName) => void
}

export class KpiTile extends React.Component<Props, {}> {
    static defaultProps = {
        selected: false,
        handleKpiTileClick: () => { console.log('KPI Tile clicked') },
    }

    render() {
        const {
            measure,
            kpisData,
            selected,
            handleKpiTileClick,
        } = this.props

        return (
            <div
                className={classNames(
                    s.KpiTile,
                    {
                        [s.selected]: selected,
                        [s.changedUpwards]: kpisData.changedUpwards,
                    }
                )}
                onClick={() => handleKpiTileClick!(measure)}
            >
                <div
                    className={s.measureName}
                >
                    {measure}
                </div>

                <div
                    className={s.measureValue}
                >
                    {kpisData.value}
                </div>

                <div
                    className={classNames(
                        s.changeMeasure,
                        s.valueChange
                    )}
                >
                    {kpisData.valueChange}
                </div>

                <div
                    className={classNames(
                        s.changeMeasure,
                        s.percentChange
                    )}
                >
                    {kpisData.percentChange}
                </div>
            </div>
        )
    }
}
