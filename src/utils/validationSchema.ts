import * as Yup from 'yup';

const customEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const nameRegex =
	/^[A-Za-z][\w\s]*([^\w\s][-_]?[\w\s]*)?$/; /*name must start with alphanumeric (A-Z,a-z) may contain (0-9,_,-) */

export const TestValidation = Yup.object().shape({
	name: Yup.string().matches(nameRegex, 'Invalid name').required('Required'),
	email: Yup.string().matches(customEmailRegex, 'Invalid email').required('Required'),
	password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
});
