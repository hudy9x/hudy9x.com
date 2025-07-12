import { features } from "process";

export default function AppFeatures({ features }: { features?: string[] }) {
  console.log('features', features)
  if (!features || !features.length) return null
  console.log('AAAAAAAAAAAAAAAAAAAAAA')
  return <div className="pt-4">
    <h2 className="text-xs font-medium text-gray-600 underline underline-offset-1">Features list:</h2>
    <ul className="space-y-2 list-decimal pl-8">
      {features.map((feat, index) => {
        return <li className="text-xs text-gray-500" key={index}>
          {feat}
        </li>
      })}
    </ul>
  </div>
}
