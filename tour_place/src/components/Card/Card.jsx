

const Card = ({title,desc,img}) => {
  return (
    <div className="card text-bg-dark" style={{maxWidth: '18rem'}}>
        <div className="card-header">{title}</div>
        <div className="card-body">
          <img src={img} alt="img" style={{width:"100%"}}/>
          <p>{desc}</p>
        </div>
      </div>
  )
}

export default Card