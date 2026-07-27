export default function StatsCard({
    icon: Icon,
    value,
    label
}) {
    return (

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

            <Icon className="mb-3 text-amber-400"/>

            <h3>{value}</h3>

            <p>{label}</p>

        </div>

    )
}