import React = require('react')
import { AppState } from '../../../App'
import classNames = require('classnames')
import { Selector, Button } from '../..'
import * as s from './Sidebar.css'
import { DurationOption, DateOption, ComparisonOption, MedicineSubcategoryName, RegionOption, StoreFormatOption, CustomerSegmentOption } from '../../../sharedTypes'
import { durationOptions, getDatesOptions, getComparisonOptions, medicineSubcategories, regionOptions, storeFormatOptions, customerSegmentOptions } from '../../../data'

interface Props {
      appState: AppState,
      handleUpdateViewButtonClick?: React.MouseEventHandler<HTMLElement>,
      setAppState<K extends keyof AppState>(
            state: ((prevState: Readonly<AppState>, props: Props) => (Pick<AppState, K> | AppState | null)) | (Pick<AppState, K> | AppState | null),
            callback?: () => void
      ): void,
}

export class Sidebar extends React.Component<Props, {}> {
      render() {
            const {
                  appState,
                  handleUpdateViewButtonClick,
                  setAppState,
            } = this.props

            return (
                  <div
                        className={classNames(
                              s.Sidebar
                        )}
                  >
                        <div
                              className={s.title}
                        >
                              Configure view
                        </div>

                        <div
                              className={s.selectorGroupContainer}
                        >
                              <div
                                    className={s.selectorGroupTitle}
                              >
                                    Analysis period
                              </div>

                              <div
                                    className={s.selectorContainer}
                              >
                                    <Selector
                                          optionsArray={durationOptions}
                                          value={appState.selectedFilters.duration}
                                          handleSelectorChange={
                                                (newlySelectedDuration: DurationOption) => {
                                                      setAppState(
                                                            (prevState: AppState) => ({
                                                                  selectedFilters: {
                                                                        ...prevState.selectedFilters,
                                                                        duration: newlySelectedDuration,
                                                                        comparison: getComparisonOptions(newlySelectedDuration)[0]
                                                                  },
                                                                  dataViewNeedsUpdating: true,
                                                            })
                                                      )
                                                }
                                          }
                                    />
                              </div>

                              <div
                                    className={s.selectorContainer}
                              >
                                    <Selector
                                          optionsArray={getDatesOptions(appState.selectedFilters.duration)}
                                          value={appState.selectedFilters.dates}
                                          handleSelectorChange={
                                                (newlySelectedDates: DateOption) => {
                                                      setAppState(
                                                            (prevState: AppState) => ({
                                                                  selectedFilters: {
                                                                        ...prevState.selectedFilters,
                                                                        dates: newlySelectedDates
                                                                  },
                                                                  dataViewNeedsUpdating: true,
                                                            })
                                                      )
                                                }
                                          }
                                    />
                              </div>

                              <div
                                    className={s.selectorContainer}
                              >
                                    <Selector
                                          optionsArray={getComparisonOptions(appState.selectedFilters.duration)}
                                          value={appState.selectedFilters.comparison}
                                          handleSelectorChange={
                                                (newlySelectedComparison: ComparisonOption) => {
                                                      setAppState(
                                                            (prevState: AppState) => ({
                                                                  selectedFilters: {
                                                                        ...prevState.selectedFilters,
                                                                        comparison: newlySelectedComparison,
                                                                  },
                                                                  dataViewNeedsUpdating: true,
                                                            })
                                                      )
                                                }
                                          }
                                    />
                              </div>
                        </div>

                        <div
                              className={s.selectorGroupContainer}
                        >
                              <div
                                    className={s.selectorGroupTitle}
                              >
                                          Data source
                              </div>

                              <form
                                    className={s.radiosAndLabels}
                              >
                                          <input
                                                type='radio'
                                                id='dataSourceChoice1'
                                                name='dataSource'
                                                value='All data'
                                                defaultChecked
                                          />
                                          
                                          <label
                                                htmlFor='dataSourceChoice1'
                                          >
                                                All data
                                          </label>

                                          <input
                                                type='radio'
                                                id='dataSourceChoice2'
                                                name='dataSource'
                                                value='Loyalty Card'
                                          />
                                          
                                          <label
                                                htmlFor='dataSourceChoice2'
                                          >
                                                Loyalty Card (LC)
                                          </label>
                              </form>
                        </div>

                        <div
                              className={s.selectorGroupContainer}
                        >
                              <div
                                    className={s.selectorGroupTitle}
                              >
                                          Data filters
                              </div>

                              <div
                                    className={s.selectorContainer}
                              >
                                    <Selector
                                          optionsArray={Object.keys(medicineSubcategories)}
                                          value={appState.selectedFilters.subcategory}
                                          handleSelectorChange={
                                                (newlySelectedSubcategory: MedicineSubcategoryName) => {
                                                      setAppState(
                                                            (prevState: AppState) => ({
                                                                  selectedFilters: {
                                                                        ...prevState.selectedFilters,
                                                                        subcategory: newlySelectedSubcategory,
                                                                  },
                                                                  dataViewNeedsUpdating: true,
                                                            })
                                                      )
                                                }
                                          }
                                    />
                              </div>

                              <div
                                    className={s.selectorContainer}
                              >
                                    <Selector
                                          optionsArray={regionOptions}
                                          value={appState.selectedFilters.region}
                                          handleSelectorChange={
                                                (newlySelectedRegion: RegionOption) => {
                                                      setAppState(
                                                            (prevState: AppState) => ({
                                                                  selectedFilters: {
                                                                        ...prevState.selectedFilters,
                                                                        region: newlySelectedRegion,
                                                                  },
                                                                  dataViewNeedsUpdating: true,
                                                            })
                                                      )
                                                }
                                          }
                                    />
                              </div>

                              <div
                                    className={s.selectorContainer}
                              >
                                    <Selector
                                          optionsArray={storeFormatOptions}
                                          value={appState.selectedFilters.storeFormat}
                                          handleSelectorChange={
                                                (newlySelectedStoreFormat: StoreFormatOption) => {
                                                      setAppState(
                                                            (prevState: AppState) => ({
                                                                  selectedFilters: {
                                                                        ...prevState.selectedFilters,
                                                                        storeFormat: newlySelectedStoreFormat,
                                                                  },
                                                                  dataViewNeedsUpdating: true,
                                                            })
                                                      )
                                                }
                                          }
                                    />
                              </div>

                              <div
                                    className={s.selectorContainer}
                              >
                                    <Selector
                                          optionsArray={customerSegmentOptions}
                                          value={appState.selectedFilters.customerSegment}
                                          handleSelectorChange={
                                                (newlySelectedCustomerSegment: CustomerSegmentOption) => {
                                                      setAppState(
                                                            (prevState: AppState) => ({
                                                                  selectedFilters: {
                                                                        ...prevState.selectedFilters,
                                                                        customerSegment: newlySelectedCustomerSegment,
                                                                  },
                                                                  dataViewNeedsUpdating: true,
                                                            })
                                                      )
                                                }
                                          }
                                    />
                              </div>
                        </div>

                        <Button
                              fullWidth
                              disabled={!appState.dataViewNeedsUpdating}
                        >
                                    Update view
                        </Button>
                  </div>
            )
      }
}