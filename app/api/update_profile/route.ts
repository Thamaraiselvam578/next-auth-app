import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    message?: string,
    error?: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
    try {
        const { method, body } = req
        if (method !== "PUT") {
            res.status(405).json({ error: 'Internal Server Error' })
        }

    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
}