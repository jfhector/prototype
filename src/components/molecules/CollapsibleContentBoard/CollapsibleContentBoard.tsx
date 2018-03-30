import * as React from 'react'
import { CollapseButton } from '../..'
import * as s from './CollapsibleContentBoard.css'
import classNames = require('classnames')

interface Props {
      title: string
      children: React.ReactNode
      expanded?: boolean
      rightNode?: React.ReactNode
      rightNodeIsSticky?: boolean
      rightNodeIsHighlighted?: boolean
      handleCollapseButtonClick?: React.MouseEventHandler<HTMLElement>
}

export class CollapsibleContentBoard extends React.Component<Props, {}> {
      static defaultProps = {
            expanded: false,
            rightNode: false,
            rightNodeIsSticky: false,
            rightNodeIsHighlighted: false,
            handleCollapseButtonClick: () => { console.log('Button clicked') }
      }
      
      refToRightNodeContainer: HTMLElement

      scrollRightNodeContainerIntoView = (optionsObject?: {
            behavior?: 'auto' | 'instant' | 'smooth'
            block?: 'start' | 'center' | 'end' | 'nearest'
            inline?: 'start' | 'center' | 'end' | 'nearest'
      }) => {
            this.refToRightNodeContainer.scrollIntoView(optionsObject)
      }

      render() {
            const {
                  title,
                  children,
                  expanded,
                  rightNode,
                  rightNodeIsSticky,
                  rightNodeIsHighlighted,
                  handleCollapseButtonClick,
            } = this.props
      
            return (
                  <div
                        className={classNames(
                              s.CollapsibleContentBoard,
                              {
                                    [s.expanded]: expanded,
                                    [s.rightNodeIsSticky]: rightNodeIsSticky,
                                    [s.rightNodeIsHighlighted]: rightNodeIsHighlighted,
                              }
                        )}
                  >
                        <div
                              className={s.collapseButtonContainer}
                        >
                              <CollapseButton
                                    expanded={expanded}
                                    handleClick={handleCollapseButtonClick}
                              />
                        </div>

                        <div 
                              className={s.title}
                        >
                              {title}
                        </div>

                        {expanded &&
                              <div
                                    className={s.rightNodeContainer}
                                    ref={
                                          (element: HTMLDivElement) => {
                                                this.refToRightNodeContainer = element
                                          }
                                    }
                              >
                                    {!!rightNode && 'Selected measure: '}
                                    {rightNode}
                              </div>
                        }

                        {expanded &&
                              <div
                                    className={s.childrenContainer}
                              >
                                    {children}
                              </div>
                        }
                  </div>
            )
      }

}
