import * as React from 'react'
import Select from 'react-select';
import { yearOptions, seasonOptions } from './options'
import { Option, OptionNames } from './styled';
// import { ValueType } from "react-select/lib/types";

const customStyle = {
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? '#FCEEB9' : '#7A9867' ,
        padding: 10,
      }),
}


const TypeFilter = () => {

    const [ year, setYear ] = React.useState(null)

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setOptions(
    //       prevState => ({
    //         ...prevState,
    //       [e.target.name]: [e.target.value]
    //     }))
    //   }


    return(
        <>
        <Option>
            <OptionNames>Year</OptionNames>
            <Select
            defaultValue={year}
            // onChange={(selectedOption: ValueType<OptionType>) => {
            //     const value = (selectedOption as OptionType).value;
            // }}
            options={yearOptions}
            styles={customStyle}
            />
        </Option>

        <Option>
        <OptionNames>Season</OptionNames>
            <Select
            // value={options.season}
            // onChange={(e:any) => setOptions(e)}
            options={seasonOptions}
            styles={customStyle}
            />
        </Option>
        </>
    )
}

export default TypeFilter