import "./ProfileCard.css"
function ProfileCard({name,link,role,isPresent=false}){
  return (
    <div className="profile-card">
      <img className="avatar" src={link} alt="pic not found"/>
      <h1 className="name">{name}</h1>
      <h3 className="title">{role}</h3>
      {isPresent ?<p>Is Available</p>:<p>Is Not Available</p>}
      <p className="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam inventore quam saepe ullam ad eum reiciendis porro vitae alias mollitia recusandae, rerum est fugiat ducimus dignissimos omnis temporibus possimus. Iste.</p>
      <div className="social-links">
        <a href="">twitter</a>
        <a href="">instagram</a>
        <a href="">linkedin</a>
      </div>
    </div>
  );
}
export default ProfileCard;