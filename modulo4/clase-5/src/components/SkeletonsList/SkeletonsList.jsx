import "./SkeletonsList.css";

const SkeletonsList = () => {
  return (
    <div className="skeletons-container">
      {[...Array(16)].map((_, index) => (
        <div key={index} className="skeleton"></div>
      ))}
    </div>
  );
};

export default SkeletonsList;
