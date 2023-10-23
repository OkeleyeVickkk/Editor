const readFile = (fileToBeRead) =>
	new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.addEventListener("load", (currentFile) => resolve(currentFile.target.result));
		reader.addEventListener("error", (currentFile) => reject(currentFile.target.error));

		reader.readAsDataURL(fileToBeRead);
	});

async function handleImageUpload(file) {
	const allowedFormats = ["png", "jpeg", "webp", "jpg"];
	const perMB = 1024;
	const fileExtension = file.name.split(".")[1].toLowerCase();
	const fileSizeInMb = Math.ceil(file.size / Math.pow(perMB, 2));
	if (!allowedFormats.includes(fileExtension)) {
		return { error: "File type should be png, jpeg, webp, jpeg", result: "" };
	}
	if (fileSizeInMb > 5) {
		return { error: "File size is too large", result: "" };
	}
	return { error: "", result: await readFile(file), alt: file.name };
}

export default handleImageUpload;
