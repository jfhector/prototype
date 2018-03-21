import * as React from 'react'

interface Props {
      className?: string
      big?: boolean
}

interface State {
      count: number
}

export class Counter extends React.Component<Props, State> {
      interval: number

      constructor(props: Props) {
            super(props)
            this.state = {
                  count: 0
            }
      }

      componentDidMount() {
            this.interval = window.setInterval(
                  () => this.setState(prevState => ({ count: prevState.count + 1 })),
                  1000
            )
      }

      componentWillUnmount() {
            clearInterval(this.interval)
      }

      render() {
            const { className } = this.props

            return (
                  <span className={className}>
                        {this.state.count}
                  </span>
            )
      }
}

// export const Counter = styled(Counter_preStyle)`
//       color: ${colors.textColor.positive};

//       ${(props: Props) => props.big && css`
//             font-size: 72px;
//             font-weight: 700;
//       `}
// `
