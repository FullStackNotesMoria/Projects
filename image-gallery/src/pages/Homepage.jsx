import Picture from "../components/Picture";

const Homepage = ({data}) => {
  return (
    <div className="pictures">
        {data.map((item)=>{
            item.id= Math.random(36)
            return(
                <Picture key={item.id} ph={item.photographer} img={item.src.large} />
            )
        })}
    </div>
  )
}

export default Homepage