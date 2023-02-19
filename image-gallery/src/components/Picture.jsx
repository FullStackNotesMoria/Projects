
const Picture = ({ph,img}) => {
  return (
    <div className="picture">
            <div className="imageContainer">
                <img src={img} alt="img" />
                <div className="info">
                    <p className="morePicture">{ph}</p>
                </div>
            </div>
    </div>
  )
}

export default Picture