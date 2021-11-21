import { Company } from './company'
import { EnumStatus } from '@prisma/client'
import { ApiProperty } from '@nestjs/swagger'


export class Products {
	@ApiProperty({type: Number})
	id: number
	
	@ApiProperty({type: Date})
	createdAt: Date
	
	@ApiProperty({type: Date})
	updatedAt: Date
	
	@ApiProperty({type: String})
	productName: string
	
	@ApiProperty({type: () => Company})
	company: Company
	
	@ApiProperty({enum: EnumStatus, enumName: 'EnumStatus'})
	status: EnumStatus
	
	@ApiProperty({type: Number})
	companyId: number
	
}