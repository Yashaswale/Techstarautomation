const cards = [
  { id: 1, name: "Card 1", image: "/placeholder.svg?height=300&width=400" },
  { id: 2, name: "Card 2", image: "/placeholder.svg?height=300&width=400" },
  { id: 3, name: "Card 3", image: "/placeholder.svg?height=300&width=400" },
  { id: 4, name: "Card 4", image: "/placeholder.svg?height=300&width=400" },
  { id: 5, name: "Card 5", image: "/placeholder.svg?height=300&width=400" },
  { id: 6, name: "Card 6", image: "/placeholder.svg?height=300&width=400" },
  { id: 7, name: "Card 7", image: "/placeholder.svg?height=300&width=400" },
  { id: 8, name: "Card 8", image: "/placeholder.svg?height=300&width=400" },
  { id: 9, name: "Card 9", image: "/placeholder.svg?height=300&width=400" },
  { id: 10, name: "Card 10", image: "/placeholder.svg?height=300&width=400" },
  { id: 11, name: "Card 11", image: "/placeholder.svg?height=300&width=400" },
]

export default function CardGrid() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div 
            key={card.id}
            className="relative aspect-[4/3] rounded-lg overflow-hidden group"
          >
            <image
              src={card.image}
              alt={`Image for ${card.name}`}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
              <h3 className="text-xl font-semibold">{card.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

