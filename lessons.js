module.exports = class LessonPlan {
    constructor(lessonJson, currentLesson = 1) {
       this.lesson = lessonJson;
       this.numberOfLessons = lessonJson.length;
       this.currentLesson = currentLesson;
    }
   
    /**
     * Advance the currentLesson counter by 1.  Will not advance beyond the number
     * of lessons set by lessonJson
     */
    nextLesson() {
        this.currentLesson = (this.currentLesson < this.numberOfLessons) ? this.currentLesson+1 : this.currentLesson;
    }
   
    /**
     * Decrement the currentLesson counter by 1.  Will not decrease past 1. 
     */ 
    previousLesson() {
       this.currentLesson = this.currentLesson > 1 && this.currentLesson-1; 
    }

    //Getters    
    getLessonDescription() {
        return this.lesson[this.currentLesson+1].description;
    }
    
    getCurrentLesson() {
        return this.currentLesson;
    }
    
    getCurrentLessonObject() {
        return this.lesson[this.currentLesson-1];
    }
    
};