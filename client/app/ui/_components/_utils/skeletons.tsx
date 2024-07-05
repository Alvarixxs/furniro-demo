// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function FeaturedProductsSkeleton({numItems} : {numItems: number}) {
  return (
    <div className={`${shimmer} relative   flex flex-wrap justify-center gap-8 max-w-7xl overflow-hidden`}>
      {Array.from({length: numItems}).map((value, index) => (
        <ProductViewSkeleton key={index}/>
      ))}
    </div>
  )
}

function ProductViewSkeleton() {
  return (
    <div className={`w-[285px] h-[446px] bg-gray-100 flex flex-col`}>
      <div className="bg-gray-200 rounded-md w-full h-[301px]"/>
      <div className="p-4 flex flex-col gap-2">
        <div className="bg-gray-200 rounded-md w-[123px] h-[29px]"/>
        <div className="bg-gray-200 rounded-md mb-2 w-full h-[24px]" />
        <div className="bg-gray-200 rounded-md w-[131px] h-[30px]" />
      </div>
    </div>
  )
}