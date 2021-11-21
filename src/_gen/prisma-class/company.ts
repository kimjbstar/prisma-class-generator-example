import { Products } from './products'
import { EnumStatus } from '@prisma/client'
import { ApiProperty } from '@nestjs/swagger'


export class Company {
	@ApiProperty({type: Number})
	id: number
	
	@ApiProperty({type: Date})
	createdAt: Date
	
	@ApiProperty({type: Date})
	updatedAt: Date
	
	@ApiProperty({type: String})
	name: string
	
	@ApiProperty({type: String})
	cnpj: string
	
	@ApiProperty({enum: EnumStatus, enumName: 'EnumStatus'})
	status: EnumStatus
	
	@ApiProperty({type: String})
	phone: string
	
	@ApiProperty({isArray: true, type: () => Products})
	Products: Products[]
	
}