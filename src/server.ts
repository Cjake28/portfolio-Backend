
import {app} from './app';

const PORT = process.env.PORT;

app.listen(PORT || 8084, () => {
	console.log(`Server running on port ${PORT}`);
});
