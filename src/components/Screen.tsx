import useTheme from "../hooks/useTheme"

type ScreenProps = {
  value: string
}
const Screen = ({ value }: ScreenProps) => {
  const { activeColors } = useTheme()
  return (
    <h1
      className={`${activeColors.backgrounds.screen} ${activeColors.texts.screen} p-6 sm:p-10 rounded-lg w-full text-right text-3xl sm:text-5xl`}
    >
      {value}
    </h1>
  )
}

export default Screen
