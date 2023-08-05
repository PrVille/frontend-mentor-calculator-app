import useTheme from "../hooks/useTheme"
import ThemeToggle from "./ThemeToggle"

const Header = () => {
  const { activeColors } = useTheme()
  return (
    <header
      className={`${activeColors.texts.header} py-2 px-1 flex justify-between items-end w-full select-none`}
    >
      <h1 className="text-3xl">calc</h1>
      <ThemeToggle />
    </header>
  )
}

export default Header
