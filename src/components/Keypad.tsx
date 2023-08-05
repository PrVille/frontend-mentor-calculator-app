import useTheme from "../hooks/useTheme"

type KeyProps = {
  children: React.ReactNode
  backgroundColor?: string
  shadowColor?: string
  textColor?: string
  textSm?: boolean
  onClick: () => void
}
const Key = ({
  children,
  backgroundColor,
  shadowColor,
  textColor,
  textSm,
  onClick,
}: KeyProps) => {
  const { activeColors } = useTheme()
  backgroundColor = backgroundColor || activeColors.keys.main.background
  shadowColor = shadowColor || activeColors.keys.main.shadow
  textColor = textColor || activeColors.texts.main

  return (
    <button
      className={`${backgroundColor} ${shadowColor} hover:brightness-150 w-full text-center rounded-lg shadow-[0px_4px_0px_0px]`}
      onClick={onClick}
    >
      <p
        className={`${textColor} select-none ${
          textSm ? "text-[20px]/[60px]" : "text-[32px]/[60px]"
        } rounded-lg`}
      >
        {children}
      </p>
    </button>
  )
}

type KeypadProps = {
  addToScreenValue: (value: string) => () => void
  addOperation: (value: string) => () => void
  calculateNewValue: () => void
  removeLastScreenValue: () => void
  reset: () => void
}

const Keypad = ({
  addToScreenValue,
  addOperation,
  calculateNewValue,
  reset,
  removeLastScreenValue,
}: KeypadProps) => {
  const { activeColors } = useTheme()

  return (
    <div
      className={`${activeColors.backgrounds.keypad} grid grid-cols-4 gap-3 sm:gap-6 p-6 sm:p-[30px] w-full rounded-lg`}
    >
      <Key onClick={addToScreenValue("7")}>7</Key>
      <Key onClick={addToScreenValue("8")}>8</Key>
      <Key onClick={addToScreenValue("9")}>9</Key>
      <Key
        onClick={removeLastScreenValue}
        backgroundColor={activeColors.keys.delAndReset.background}
        shadowColor={activeColors.keys.delAndReset.shadow}
        textColor="text-white"
        textSm
      >
        DEL
      </Key>
      <Key onClick={addToScreenValue("4")}>4</Key>
      <Key onClick={addToScreenValue("5")}>5</Key>
      <Key onClick={addToScreenValue("6")}>6</Key>
      <Key onClick={addOperation("+")}>+</Key>
      <Key onClick={addToScreenValue("1")}>1</Key>
      <Key onClick={addToScreenValue("2")}>2</Key>
      <Key onClick={addToScreenValue("3")}>3</Key>
      <Key onClick={addOperation("-")}>-</Key>
      <Key onClick={addToScreenValue(",")}>.</Key>
      <Key onClick={addToScreenValue("0")}>0</Key>
      <Key onClick={addOperation("/")}>/</Key>
      <Key onClick={addOperation("x")}>x</Key>

      <div className="col-span-2">
        <Key
          onClick={reset}
          backgroundColor={activeColors.keys.delAndReset.background}
          shadowColor={activeColors.keys.delAndReset.shadow}
          textColor="text-white"
          textSm
        >
          RESET
        </Key>
      </div>

      <div className="col-span-2">
        <Key
          onClick={calculateNewValue}
          backgroundColor={activeColors.keys.equals.background}
          shadowColor={activeColors.keys.equals.shadow}
          textColor={activeColors.texts.equalsKey}
        >
          =
        </Key>
      </div>
    </div>
  )
}

export default Keypad
