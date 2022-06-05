// Arka plandan gelen veri örneği, data her zaman liste şeklinde
// dayOfDate dışındaki bütün kısımlar formdan toplanacak admin -> addevent
const mockEvents = {
    data: [
        {
            eventName: "Sample Event Name",
            eventDescription: "Sample Desc",
            image: "https://siber.boun.edu.tr/sites/cyber.boun.edu.tr/files/sample4.jpg", // Resimleri şimdilik urlden alalım
            date: "2022-06-5'T'03-09-00",
            dayOfDate: "Sunday", // Bunu backendden vericeğim, hesaplanmasına gerek yok
            capacity: 110,
            unitPrice: 75.5, // Double tipinde
            place: "Istanbul",
            eventType: "MUSIC", // MUSIC, THEATER, CINEMA
            eventSubType: "Action",
            hasSeatPlan: false, // eğer seat plan varsa koltuk yapısını göstereceğiz
        },
        {
            eventName: "Sample Event Name2",
            eventDescription: "Sample Desc2",
            image: "https://siber.boun.edu.tr/sites/cyber.boun.edu.tr/files/sample4.jpg", // Resimleri şimdilik urlden alalım
            date: "2022-06-5'T'03-09-00",
            dayOfDate: "Friday", // Bunu backendden vericeğim, hesaplanmasına gerek yok
            capacity: 200,
            unitPrice: 75.5, // Double tipinde
            place: "Istanbul",
            eventType: "MUSIC", // MUSIC, THEATER, CINEMA
            eventSubType: "Action",
            hasSeatPlan: false, // eğer seat plan varsa koltuk yapısını göstereceğiz
        },
    ],
    success: true
}

export default mockEvents;
