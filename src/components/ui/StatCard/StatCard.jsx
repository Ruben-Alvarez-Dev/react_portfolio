import './StatCard.css'

function StatCard({ number, description }) {
  return (
    <div className="stat">
      <h3>{number}</h3>
      <p>{description}</p>
    </div>
  )
}

export default StatCard