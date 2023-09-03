import { useQuery, gql } from "@apollo/client"

const GET_LESSONS_QUERY = gql`
query {
  lessons {
    id
    title
  }
}
`
function App() {
  const { data } = useQuery(GET_LESSONS_QUERY)
  console.log(data);
  return (
    <>
     <div className="text-2xl">Hello word</div>
    </>
  )
}

export default App
