// Arka plandan gelen veri örneği, data her zaman liste şeklinde
// dayOfDate dışındaki bütün kısımlar formdan toplanacak admin -> addevent
const mockEvents = {
    data: [
        {
            id: 1,
            eventName: "Sample Event Name",
            eventDescription: "Sample Desc",
            image: "https://siber.boun.edu.tr/sites/cyber.boun.edu.tr/files/sample1.jpg", // Resimleri şimdilik urlden alalım
            date: "2022-06-17T00:23:00",
            dayOfDate: "Sunday", // Bunu backendden vericeğim, hesaplanmasına gerek yok
            capacity: 110,
            unitPrice: 75.5, // Double tipinde
            place: "Istanbul",
            eventType: "MUSIC", // MUSIC, THEATER, CINEMA
            eventSubType: "Hiphop",
            hasSeatPlan: false, // eğer seat plan varsa koltuk yapısını göstereceğiz
        },
        {
            id: 2,
            eventName: "Sample Event Name2",
            eventDescription: "Sample Desc2",
            image: "https://siber.boun.edu.tr/sites/cyber.boun.edu.tr/files/sample2.jpg", // Resimleri şimdilik urlden alalım
            date: "2022-06-17T00:23:00",
            dayOfDate: "Monday", // Bunu backendden vericeğim, hesaplanmasına gerek yok
            capacity: 200,
            unitPrice: 55.5, // Double tipinde
            place: "Izmir",
            eventType: "MUSIC", // MUSIC, THEATER, CINEMA
            eventSubType: "Rock",
            hasSeatPlan: false, // eğer seat plan varsa koltuk yapısını göstereceğiz
        },
        {
            id: 3,
            eventName: "Sample Event Name3",
            eventDescription: "Sample Desc3",
            image: "https://siber.boun.edu.tr/sites/cyber.boun.edu.tr/files/sample3.jpg", // Resimleri şimdilik urlden alalım
            date: "2022-06-17T00:23:00",
            dayOfDate: "Tuesday", // Bunu backendden vericeğim, hesaplanmasına gerek yok
            capacity: 100,
            unitPrice: 15.5, // Double tipinde
            place: "Izmir",
            eventType: "MUSIC", // MUSIC, THEATER, CINEMA
            eventSubType: "Pop",
            hasSeatPlan: false, // eğer seat plan varsa koltuk yapısını göstereceğiz
        },
        {
            id: 4,
            eventName: "Sample Event Name4",
            eventDescription: "Sample Desc4",
            image: "https://siber.boun.edu.tr/sites/cyber.boun.edu.tr/files/sample4.jpg", // Resimleri şimdilik urlden alalım
            date: "2022-06-17T00:23:00",
            dayOfDate: "Friday", // Bunu backendden vericeğim, hesaplanmasına gerek yok
            capacity: 250,
            unitPrice: 85.5, // Double tipinde
            place: "Ankara",
            eventType: "MUSIC", // MUSIC, THEATER, CINEMA
            eventSubType: "Rock",
            hasSeatPlan: false, // eğer seat plan varsa koltuk yapısını göstereceğiz
        },
    ],
    success: true
}

export default mockEvents;
