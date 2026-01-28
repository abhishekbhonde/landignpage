import * as React from "react"
import { cn } from "@/lib/utils"

const Badge = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & {
        variant?: "default" | "secondary" | "outline" | "success"
    }
>(({ className, variant = "default", ...props }, ref) => {
    const variants = {
        default: "border-transparent bg-gray-800 text-gray-100 hover:bg-gray-700",
        secondary: "border-transparent bg-indigo-900/50 text-indigo-200",
        outline: "text-gray-300 border-gray-700",
        success: "border-transparent bg-green-900/50 text-green-200"
    }

    return (
        <div
            ref={ref}
            className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
                variants[variant],
                className
            )}
            {...props}
        />
    )
})
Badge.displayName = "Badge"

export { Badge }
