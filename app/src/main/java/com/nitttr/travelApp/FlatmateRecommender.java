package com.nitttr.travelApp;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class FlatmateRecommender {
    private List<Flatmate> flatmates;

    public FlatmateRecommender(InputStream inputStream) throws IOException {
        this.flatmates = new ArrayList<>();
        readFlatmatesFromInputStream(inputStream);
    }

    private void readFlatmatesFromInputStream(InputStream inputStream) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));
        String line;
        while ((line = reader.readLine()) != null) {
            String[] columns = line.split(",");
            Flatmate flatmate = new Flatmate(columns);
            flatmates.add(flatmate);
        }
    }

    public List<Flatmate> getRecommendations(UserPreferences userPreferences) {
        // Calculate the compatibility score for all flatmates
        for (Flatmate flatmate : flatmates) {
            int compatibilityScore = calculateCompatibilityScore(userPreferences, flatmate);
            flatmate.setCompatibilityScore(compatibilityScore);
        }

        // Sort all flatmates based on the compatibility score
        Collections.sort(flatmates, Comparator.comparingInt(Flatmate::getCompatibilityScore).reversed());

        // Return the top 5 flatmates
        return flatmates.subList(0, Math.min(5, flatmates.size()));
    }

    private int calculateDistance(UserPreferences userPreferences, Flatmate flatmate) {
        // Assign weights to each attribute based on priority
        int dietaryPreferencesWeight = 2;
        int ageWeight = 3;
        int genderWeight = 8;
        int tidinessPreferenceWeight = 4;
        int occupationWeight = 5;
        int lookingForGenderWeight = 7;
        int chorePreferencesWeight = 3;
        int personalityTypeWeight = 6;
        int lifestyleWeight = 4;
        int doYouSmokeWeight = 5;
        int doYouConsumeAlcoholWeight = 2;
        int localityWeight = 7;

        // Calculate the distance based on each attribute
        int distance = 0;
        distance += dietaryPreferencesWeight * (userPreferences.getDietaryPreferences().equals(flatmate.getDietaryPreferences()) ? 0 : 1);
        distance += ageWeight * (userPreferences.getAge().equals(flatmate.getAge()) ? 0 : 1);
        distance += genderWeight * (userPreferences.getGender().equals(flatmate.getGender()) ? 0 : 1);
        distance += tidinessPreferenceWeight * (userPreferences.getTidinessPreference().equals(flatmate.getTidinessPreference()) ? 0 : 1);
        distance += occupationWeight * (userPreferences.getOccupation().equals(flatmate.getOccupation()) ? 0 : 1);
        distance += lookingForGenderWeight * (userPreferences.getLookingForGender().equals(flatmate.getGender()) ? 0 : 1);
        distance += chorePreferencesWeight * (userPreferences.getChorePreferences().equals(flatmate.getChorePreferences()) ? 0 : 1);
        distance += personalityTypeWeight * (userPreferences.getPersonalityType().equals(flatmate.getPersonalityType()) ? 0 : 1);
        distance += lifestyleWeight * (userPreferences.getLifestyle().equals(flatmate.getLifestyle()) ? 0 : 1);
        distance += doYouSmokeWeight * (userPreferences.getDoYouSmoke().equals(flatmate.getDoYouSmoke()) ? 0 : 1);
        distance += doYouConsumeAlcoholWeight * (userPreferences.getDoYouConsumeAlcohol().equals(flatmate.getDoYouConsumeAlcohol()) ? 0 : 1);
        distance += localityWeight * (userPreferences.getLocality().equals(flatmate.getLocality()) ? 0 : 1);

        return distance;
    }

    private int calculateCompatibilityScore(UserPreferences userPreferences, Flatmate flatmate) {
        int distance = calculateDistance(userPreferences, flatmate);

        // Calculate compatibility score based on the distance
        // Adjust weights accordingly
        int compatibilityScore = 10 - distance; // Example calculation, adjust as needed
        return compatibilityScore;
    }
}