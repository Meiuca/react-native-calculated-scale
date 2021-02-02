# react-native-calculated-scale

This lib has the premise of calculating the size scale for fonts, widths, heights, margins and paddings.

| Name | Description | Parameters |
|--|--|--|
| font | this function scaled font-size | value, return type |
| vertical | this function scaled values vertical bottom and top | value, return type |
| horizontal | this function scaled values horizontal left and right | value, return type |

### Parameters
| Name | Type | Description |
|--|--|--|
| Value parameter | String or Number | This parameters define value is scaled |
| Return type | bool | This parameters define type return, if true return number, if false return string px |

## Install
```js
yarn add react-native-calculated-scale
```

## Using with Styled Components
```js
import styled from 'styled-components/native'
import scaled from 'react-native-calculated-scale'

export const Container = styled.View`
    font-size: ${scaled.font(`15px`)};
    padding-top: ${scaled.vertical(`10px`)};
    margin-left: ${scaled.horizontal(`10px`)};
    margin-right: ${scaled.horizontal(`10px`)};
`
```

## Using with JS
```js
import scaled from 'react-native-calculated-scale'

function App(){

    return(
        <View style={{
            fontSize: scaled.font(15, true),
            paddingTop: scaled.vertical(10, true),
            marginLeft: scaled.horizontal(10, true),
            marginRight: scaled.horizontal(10, true),
        }}>
            <Text>Using</Text>
        </View>
    )
}            
```
