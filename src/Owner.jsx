import Nav from "./Nav";

const Owner = () => {
  return (
    <div>
      <Nav />
      <div className="owner">
        <h1>Napatsawan - Group I - 20</h1>
        <div className="img-container">
          <img
            src="https://cdn.pixabay.com/photo/2020/11/22/17/28/cat-5767334_1280.jpg"
            alt="picture profile"
          />
        </div>
        <h4>Short Biography:</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
          quas in soluta quo pariatur non culpa quos veritatis officia quam
          reprehenderit distinctio commodi mollitia quaerat eum perferendis
          voluptate delectus facilis id recusandae illum hic est inventore quod.
          Beatae dolores atque, quod sapiente, earum quibusdam numquam similique
          voluptates repellendus, in ratione.
        </p>
      </div>
    </div>
  );
};

export default Owner;
