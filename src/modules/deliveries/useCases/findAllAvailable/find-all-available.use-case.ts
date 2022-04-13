import { prisma } from "../../../../database/primsaClient";

export class FindAllAvailableUseCase {
    async execute() {
        const deliveries = await prisma.deliveries.findMany({
            where: {
                end_at: null
            }
        })

        return deliveries
    }
} 