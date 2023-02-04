import { __awaiter } from "tslib";
export const urlToFile = (url, filename, mimeType) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch(url);
        const buf = yield res.arrayBuffer();
        return new File([buf], filename, { type: mimeType });
    }
    catch (error) {
        throw error;
    }
});
export default urlToFile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsVG9GaWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcmVzdC1hZG1pbi9zcmMvbGliL3V0aWxzL3VybFRvRmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUFHLENBQU8sR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsRUFBRTtJQUN2RCxJQUFJO1FBQ0YsTUFBTSxHQUFHLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsTUFBTSxHQUFHLEdBQUcsTUFBTSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0tBQ3REO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxNQUFNLEtBQUssQ0FBQztLQUNiO0FBQ0gsQ0FBQyxDQUFBLENBQUM7QUFDQSxlQUFlLFNBQVMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB1cmxUb0ZpbGUgPSBhc3luYyAodXJsLCBmaWxlbmFtZSwgbWltZVR5cGUpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICAgIGNvbnN0IGJ1ZiA9IGF3YWl0IHJlcy5hcnJheUJ1ZmZlcigpO1xuICAgICAgcmV0dXJuIG5ldyBGaWxlKFtidWZdLCBmaWxlbmFtZSwgeyB0eXBlOiBtaW1lVHlwZSB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9O1xuICAgIGV4cG9ydCBkZWZhdWx0IHVybFRvRmlsZTtcbiAgIl19