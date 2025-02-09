import React, { useState, useCallback } from 'react';
import showToast from '@/utils/showToast';
import { AttachmentIcon, CloudUploadIcon, DeleteIcon, DeleteIconSmall } from '@/assets/icons';

interface ICustomFileUploadProps {
	onFileSelect: (file: File[]) => void;
	isMultipleFile?: boolean;
	accept?: string;
	fileSize?: number;
	previewType?: 'file' | 'image';
}

const CustomFileUpload = (props: ICustomFileUploadProps) => {
	const { onFileSelect, isMultipleFile = false, accept, fileSize = 5, previewType } = props;
	const [files, setFiles] = useState<File[]>([]);

	// Handle file selection and validation
	const processFiles = useCallback(
		(newFiles: File[]) => {
			const validFiles = newFiles.filter(file => {
				if (file.size > fileSize * 1024 * 1024) {
					showToast(`File "${file.name}" exceeds ${fileSize}MB. Please select a smaller file.`, 'error');
					return false;
				}
				return true;
			});

			if (validFiles.length > 0) {
				setFiles(prevFiles => {
					const updatedFiles = [...prevFiles, ...validFiles];
					onFileSelect(updatedFiles);
					return updatedFiles;
				});
			}
		},
		[onFileSelect, fileSize]
	);

	// Drag-and-drop handler
	const handleFileDrop = useCallback(
		(event: React.DragEvent<HTMLDivElement>) => {
			event.preventDefault();
			if (event?.dataTransfer?.files && event?.dataTransfer?.files?.length > 0) {
				processFiles(Array.from(event?.dataTransfer?.files));
			}
		},
		[processFiles]
	);

	// File input change handler
	const handleFileChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			if (event?.target?.files && event?.target?.files?.length > 0) {
				processFiles(Array.from(event?.target?.files));
			}
		},
		[processFiles]
	);

	const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
	};

	// Remove a file from the list
	const handleRemoveFile = (fileToRemove: File) => {
		setFiles(prevFiles => {
			const updatedFiles = prevFiles.filter(file => file !== fileToRemove);
			onFileSelect(updatedFiles);
			return updatedFiles;
		});
		const fileInput = document.getElementById('fileInput') as HTMLInputElement;
		fileInput.value = '';
	};

	// Format file size
	const formatSize = (size: number) => {
		if (size < 1024) return `${size} bytes`;
		if (size < 1048576) return `${(size / 1024).toFixed(2)} KB`;
		return `${(size / 1048576).toFixed(2)} MB`;
	};

	// Check if all files are images
	const isOnlyImage = previewType === 'image' && files?.every(file => file.type?.startsWith('image'));

	const renderFilePreview = () => {
		if (files.length === 0) return;

		if (isOnlyImage) {
			return files.map((file, index) => (
				<div key={index} className="relative group">
					<img
						src={URL.createObjectURL(file)}
						alt={`Preview`}
						className="w-[87px] h-[87px] object-cover rounded border"
					/>
					<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded">
						<button
							type="button"
							className="text-off-white text-xl font-medium px-4 py-2 rounded-md"
							onClick={() => handleRemoveFile(file)}
						>
							<DeleteIconSmall />
						</button>
					</div>
				</div>
			));
		}

		return files.map(file => (
			<div
				key={file.name}
				className="w-full h-auto p-2 px-3 border border-muted-grey gap-2 rounded-lg flex items-center justify-between"
			>
				<div className="flex gap-3 items-center max-w-[70%]">
					<div className="text-red-500 cursor-pointer" onClick={() => handleRemoveFile(file)}>
						<AttachmentIcon />
					</div>
					<div className="flex flex-col ">
						<p className="text-sm font-normal text-gunmetal max-w-[75%] truncate">{file.name}</p>
						<p className="text-xs text-slate-grey">
							{`${file.type.split('/')[1] || 'Unknown'} | ${formatSize(file.size)}`}
						</p>
					</div>
				</div>
				<div className="text-red-500 cursor-pointer" onClick={() => handleRemoveFile(file)}>
					<DeleteIcon />
				</div>
			</div>
		));
	};

	return (
		<div className="relative">
			<div
				className="w-full h-52 border-2 border-dashed border-black rounded-lg flex flex-col items-center justify-center"
				onDragOver={handleDragOver}
				onDrop={handleFileDrop}
			>
				<div className="flex flex-col items-center">
					<CloudUploadIcon />
					<p className="text-sm text-slate-400 font-medium mt-4">Drag & Drop to upload</p>
					<p className="text-sm text-slate-grey font-medium mt-2">or</p>
				</div>

				<label
					htmlFor="fileInput"
					className={`px-4 py-2 text-navy-blue text-#ff0000 font-medium text-sm rounded cursor-pointer`}
				>
					Browse Files
				</label>

				{(isMultipleFile || files.length == 0) && (
					<input
						id="fileInput"
						type="file"
						multiple={isMultipleFile}
						accept={accept}
						className="hidden"
						onChange={handleFileChange}
					/>
				)}
			</div>

			{/* File previews */}
			<div className="mt-4 flex flex-wrap gap-4">{renderFilePreview()}</div>
		</div>
	);
};

export default CustomFileUpload;
