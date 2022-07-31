import type { NextPage } from 'next'
import TaskCard from "../components/TaskCard"
import GridLayout from "react-grid-layout";

const Home: NextPage = () => {
  return (
  <>
    <GridLayout className="layout" cols={12} rowHeight={30} width={1200}>
        <div key="a" data-grid={{ x: 2, y: 0, w: 4, h: 2}} className=' w-10 h-5 bg-black cursor-grab rounded-md'>
          <TaskCard />
        </div>
        <div key="b" data-grid={{ x: 1, y: 0, w: 4, h: 2}} className=' w-10 h-5 bg-black cursor-grab rounded-md'>
          <TaskCard />
        </div>
        <div key="c" data-grid={{ x: 4, y: 0, w: 4, h: 2}} className=' w-10 h-5 bg-black cursor-grab rounded-md'>
          <TaskCard />
        </div>
    </GridLayout>
  </>
  )
}

export default Home
