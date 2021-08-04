import React from 'react'
import { useRouter } from 'next/router'

export default function code_id() {
    const router = useRouter()
    const { code_id } = router.query

    return (
        <div>
            
        </div>
    )
}
