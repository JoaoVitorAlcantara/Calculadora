import React from 'react'
import './Calculator.css'
import Button from './Button.jsx'
import Display from './Display.jsx'
import {useState} from 'react'

export default () => {
    let [clear, setClear] = useState(false)
    let [check, setCheck] = useState(1)
    let [operator,setOperator] = useState('')
    let [v1, setV1] = useState(0)
    let [v2, setV2] = useState(0)
    var [currentValue, setValue] = useState('0')



    function addValue(n){
        try {
            if (n=='.' && currentValue.includes('.')) {
                return}
        } catch {
            
        }

        if (clear == true) {
            setValue(currentValue = '')
        }
        if (currentValue == '0'){
            currentValue=''
        }
        setValue(currentValue = currentValue + n)
        setClear(clear = false)    
}

    function clearAll() {
        setCheck(check=1)
        setValue(currentValue = 0)
        setV1(v1=0)
        setV2(v2=0)
        setOperator(operator='')
        setClear(clear=false)
    }
    function setOperation(operation){
        if (check === 1){
            setV1(v1=parseFloat(currentValue))
            console.log(v1,v2)
        } else {
            setV2(v2=parseFloat(currentValue))
            console.log(v1,v2)
            switch (operator) {
                case '+':
                    setV1(v1=v1 + v2)
                    console.log('somou')
                    break
                case '-':
                    setV1(v1=v1 - v2)
                    break
                case '*':
                    setV1(v1=v1 * v2)
                    break
                case '/':
                    setV1(v1=v1 / v2)
                    break
                    
            }
            }
        setValue(currentValue = v1)
        setClear(clear = true)
        setCheck(check = 2)      
        setOperator(operator=operation)
        console.log(v1,v2)
    }
        



    return <div id='back' ><section id='calculadora'>
        <Display id='res' res={currentValue}></Display>

        <Button click={() => clearAll()} class='triple' value='AC'></Button>

        <Button click={setOperation} class='operation' value='+' ></Button>

        <Button  value='7' click={addValue}></Button>
        <Button  value='8' click={addValue}></Button>
        <Button value='9' click={addValue}></Button>
        <Button click={setOperation} class='operation' value='-' ></Button>
        <Button value='4' click={addValue}></Button>
        <Button value='5' click={addValue}></Button>
        <Button value='6' click={addValue}></Button>
        <Button click={setOperation} class='operation' value='*' ></Button>
        <Button value='1' click={addValue}></Button>
        <Button value='2' click={addValue}></Button>
        <Button value='3' click={addValue}></Button>
        <Button click={setOperation} class='operation' value='/' ></Button>
        <Button class='double' value='0' click={addValue}></Button>
        <Button value='.' click={addValue}></Button>
        <Button click={setOperation} class='operation' value='=' ></Button>
        
        </section>
        </div>
}