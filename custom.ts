
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#eda81c icon="\uf02d"
namespace MyBlock {

    //% block= "Set Frequency |Pin %pin| %Frequency Hz"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4
    //% pin.fieldOptions.tooltips="false"
    export function setFrequency(pin: AnalogPin, Frequency: number): void{

    }
}
