

const Card = ({title,desc,img}) => {
  const kay ={
    
  }

  return (
    <div className="card text-bg-dark" style={{width: '32rem'}}>
        <div className="card-header">{title}</div>
        <div className="card-body">
          <img src={img} alt="img" style={{width:"100%", height:"360px"}}/>
          <p className="kay">{desc}</p>
        </div>
      </div>
  )
}

export default Card