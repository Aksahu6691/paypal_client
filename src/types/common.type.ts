import { ReactNode } from 'react';

export interface ISelectDropdownOptions {
	label: string;
	value: string;
}

export interface ICustomDropdownMenuItem {
	key: string;
	title: string;
	isHidden?: boolean;
	StartContent?: ReactNode;
	color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
	description?: string;
	href?: string;
	isReadOnly?: boolean;
}

export interface IApiResponseData<T> {
	success: boolean;
	errorMsg: string;
	response?: T | null;
}

export interface IProduct {
	id: string;
	name: string;
	price: number;
	currency: string;
	image: string;
}
