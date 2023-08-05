import useTheme from "../hooks/useTheme"
import { ThemeName } from "../types"

const ThemeToggle = () => {
  const { toggleTheme, activeTheme, activeColors } = useTheme()

  return (
    <div className="flex gap-6 text-sm">
      <p className="self-end">THEME</p>
      <div>
        <div className="grid grid-cols-3 text-center">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
        <button
          className={`${activeColors.backgrounds.toggle} group grid grid-cols-3 p-1 rounded-full items-center justify-center`}
          onClick={() => toggleTheme()}
        >
          <div
            className={`${activeColors.keys.equals.background} ${
              activeTheme === ThemeName.primary
                ? "col-start-1"
                : activeTheme === ThemeName.secondary
                ? "col-start-2"
                : "col-start-3"
            } rounded-full w-5 h-5 group-hover:brightness-150`}
          />
        </button>
      </div>
    </div>
  )
}

export default ThemeToggle
