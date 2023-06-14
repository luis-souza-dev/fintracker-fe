import Button from "./components/button"

function App() {
  const hello = (string: string) => {
    console.log(`well hello ${string}!`);
  }

  const string = "mamai"
  return (
    <>
      <div className="flex gap-x-10 flex-wrap bg-[#052636] h-screen w-screen">
        <div className="w-full h-1/6 bg-[#143b39] mb-10">
            header test
        </div>
        <div className="mb-10 h-full w-2/12 bg-[#143b39] border-r border-r-[#084969]">
              side
        </div>
        <Button handler={() => hello(string)} color="default" size="sm"> small button </Button>
        <Button handler={() => hello(string)} color="secondary" size="md"> medium button </Button>
        <Button handler={() => hello(string)} color="default" size="lg"> large button </Button>
      </div>
    </>
  )
}

export default App
