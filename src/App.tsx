import { useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Keypad from "./components/Keypad"
import Screen from "./components/Screen"
import useTheme from "./hooks/useTheme"

// Local storage theme
// !Allow multiple commas


const App = () => {
  const { activeColors } = useTheme()
  const [operation, setOperation] = useState<string | null>(null)
  const [operating, setOperating] = useState(false)
  const [memValue, setMemValue] = useState("")
  const [value, setValue] = useState("0")

  const addToScreenValue = (newValue: string) => {
    return () => {
      setValue((prevValue) => {
        if (operating) {
          setOperating(false)
          return newValue === "," ? "0" + newValue : newValue
        }
        if (prevValue === "0" && newValue === "0") return "0"
        if (prevValue === "0" && newValue !== ",") return newValue
        return prevValue + newValue
      })
    }
  }

  const removeLastScreenValue = () => {
    setValue((prevValue) =>
      prevValue.length === 1 ? "0" : prevValue.slice(0, -1)
    )
  }

  const calculateNewValue = () => {
    if (!operation) return

    setValue((prevValue) => {
      const value1 = parseFloat(
        operating ? prevValue.replace(",", ".") : memValue.replace(",", ".")
      )
      const value2 = parseFloat(prevValue.replace(",", "."))

      let newValue: number

      operation === "+"
        ? (newValue = value1 + value2)
        : operation === "-"
        ? (newValue = value1 - value2)
        : operation === "x"
        ? (newValue = value1 * value2)
        : operation === "/"
        ? (newValue = value1 / value2)
        : (newValue = value1)

      return (+newValue.toFixed(8)).toString().replace(".", ",")
    })

    setMemValue("")
    setOperation(null)
    setOperating(true)
  }

  const addOperation = (operation: string) => {
    return () => {
      setOperating(true)
      setMemValue(value)
      setOperation(operation)
    }
  }

  const reset = () => {
    setValue("0")
    setMemValue("")
    setOperating(false)
    setOperation(null)
  }

  return (
    <>
      <main
        className={`${activeColors.backgrounds.main} h-screen flex flex-col justify-center items-center font-leagueSpartan p-8`}
      >
        <div className="flex flex-col gap-6 items-center max-w-[540px] w-full">
          <Header />
          <Screen value={value} />
          <Keypad
            addToScreenValue={addToScreenValue}
            removeLastScreenValue={removeLastScreenValue}
            addOperation={addOperation}
            calculateNewValue={calculateNewValue}
            reset={reset}
          />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
