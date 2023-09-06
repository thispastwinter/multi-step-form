import { Card } from "../components/Card"
import { Form } from "../components/Form"
import { Nav } from "../components/Nav"

export const Home = () => {
  return (
    <Card className="bg-white z-40 my-36 grid md:grid-flow-col md:grid-cols-[1fr_2fr] w-full md:h-[800px] md:w-[1000px] shadow-lg">
      <Nav />
      <Form />
    </Card>
  )
}
