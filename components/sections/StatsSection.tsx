import { Building2, Users, MessageSquare, Calendar } from 'lucide-react'
import { mockStats } from '@/lib/mockData'

const statItems = [
  {
    icon: Building2,
    label: '도시',
    value: mockStats.cities,
    unit: '개',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Users,
    label: '노마드',
    value: mockStats.nomads,
    unit: '명',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: MessageSquare,
    label: '리뷰',
    value: mockStats.reviews,
    unit: '개',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Calendar,
    label: '밋업',
    value: mockStats.meetups,
    unit: '회',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
]

export default function StatsSection() {
  return (
    <section className="border-b bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {statItems.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="flex flex-col items-center text-center"
              >
                <div className={`mb-3 rounded-full ${item.bgColor} p-3`}>
                  <Icon className={`h-6 w-6 ${item.color}`} />
                </div>
                <p className="mb-1 text-3xl font-bold text-foreground md:text-4xl">
                  {item.value.toLocaleString()}
                  <span className="ml-1 text-xl text-muted-foreground">
                    {item.unit}
                  </span>
                </p>
                <p className="text-sm font-medium text-muted-foreground">
                  {item.label}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
