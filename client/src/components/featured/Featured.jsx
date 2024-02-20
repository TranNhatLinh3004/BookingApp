// import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  //   const { data, loading, error } = useFetch(
  //     "/hotels/countByCity?cities=berlin,madrid,london"
  //   );

  return (
    <div className="featured">
      {/* {loading ? (
        "Loading please wait"
      ) : ( */}
      <>
        <div className="featuredItem">
          <img
            src="https://i.pinimg.com/originals/56/43/28/5643288ca447f84aeae3cd352acc30d9.jpg"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1 className="font-bold text-2xl">Đà Nẵng</h1>
            {/* <h2>{data[0]} properties</h2> */}
          </div>
        </div>

        <div className="featuredItem">
          <img
            src="https://minhtrungland.com/wp-content/uploads/2021/04/Ve-dep-do-thi-co-Hoi-An.jpg"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1 className="font-bold text-2xl">Hội An</h1>
            {/* <h2>{data[1]} properties</h2> */}
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://cdn.justfly.vn/1200x630/media/1a/dd/2a7f-291c-4148-bbf0-29f6dc6f2e94.jpg"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1 className="font-bold text-2xl">Huế</h1>
            {/* <h2>{data[2]} properties</h2> */}
          </div>
        </div>
      </>
      {/* )} */}
    </div>
  );
};

export default Featured;
